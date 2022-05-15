import React, { ChangeEvent, useEffect, useState } from 'react'

import PageWrapper from 'components/layouts/PageWrapper'
import axios from 'axios'
import { clearArtworkReducer, createArtwork } from 'store/Artwork/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import Gnb from 'components/layouts/Gnb'
import PageTitle from 'components/layouts/PageTitle'


const CreateArtworkPage = () => {
  const { isSuccessCreateArtwork } = useSelector((state: RootState) => state.artwork)
  const dispatch = useDispatch()
  const [imageInfo, setImageInfo] = useState<{
    image: File | null,
    title: string,
    description: string,
    authorName: string,
    authorDescription: string,
  }>({
    image: null,
    title: '',
    description: '',
    authorName: '',
    authorDescription: '',
  })

  const [isCreating, setIsCreating] = useState(false)

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length !== 1) {
      return
    }

    const file = e.target.files[0]
    setImageInfo(prev => ({
      ...prev,
      image: file,
    }))
  }

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const uploadImage = async () => {
    const nftStorageUploadImageUrl = 'https://api.nft.storage/upload'

    let formData = new FormData()
    formData.append('file', imageInfo.image as File)

    const result = await axios.post(nftStorageUploadImageUrl, formData, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_NFT_STORAGE_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    })

    return `https://ipfs.io/ipfs/${result.data.value.cid}/${imageInfo.image?.name}`
  }

  const uploadMetadata = async (imageUrl: string) => {
    const nftStorageUploadMetadataUrl = 'https://api.nft.storage/store'

    let formData = new FormData()
    const payload = {
      title: imageInfo.title,
      description: imageInfo.description,
      image: imageUrl,
    }

    formData.append('meta', JSON.stringify(payload))

    const result = await axios.post(nftStorageUploadMetadataUrl, formData, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_NFT_STORAGE_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    })

    return 'https://ipfs.io/ipfs/' + result.data.value.url.replace('ipfs://', '')
  }

  const storeNFT = async () => {
    setIsCreating(true)

    if (process.env.REACT_APP_NFT_STORAGE_KEY && !!imageInfo.image && imageInfo.title && imageInfo.description) {
      const imageUrl = await uploadImage()
      const metadataUrl = await uploadMetadata(imageUrl)

      dispatch(createArtwork.request({
        title: imageInfo.title,
        description: imageInfo.description,
        authorName: imageInfo.authorName,
        authorDescription: imageInfo.authorDescription,
        metadataUrl: metadataUrl,
        imageUrl: imageUrl,
      }))
    }
  }

  useEffect(() => {
    if (isSuccessCreateArtwork === true) {
      alert('artwork 생성 성공')
      setIsCreating(false)
    } else if (isSuccessCreateArtwork === false) {
      alert('artwork 생성 실패')
      setIsCreating(false)
    }
  }, [isSuccessCreateArtwork])

  useEffect(() => {
    return () => {
      dispatch(clearArtworkReducer())
    }
  }, [dispatch])

  return (
    <PageWrapper>
      <Gnb isMainPage title={{ isLogo: true, text: '' }} />
      <PageTitle title='작품 등록' />
      <div>
        <div>
          <input type='file' onChange={handleFile} />
        </div>

        <div>
          title: <input name='title' onChange={handleFieldChange} />
        </div>

        <div>
          description: <input name='description' onChange={handleFieldChange} />
        </div>

        <div>
          author name: <input name='authorName' onChange={handleFieldChange} />
        </div>

        <div>
          author description: <input  name='authorDescription' onChange={handleFieldChange} />
        </div>

        <div>
          <button onClick={storeNFT} disabled={isCreating}>submit</button>
        </div>
        <div>
          <button onClick={uploadImage} disabled={isCreating}>uploadImage</button>
        </div>
      </div>
    </PageWrapper>
  )
}


export default CreateArtworkPage
