import React, { ChangeEvent, useEffect, useState } from 'react'

import PageWrapper from 'components/layouts/PageWrapper'
import axios from 'axios'
import { clearArtworkReducer, createArtwork } from 'store/Artwork/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'


const CreateArtworkPage = () => {
  const { isSuccessCreateArtwork } = useSelector((state: RootState) => state.artwork)
  const dispatch = useDispatch()
  const [imageInfo, setImageInfo] = useState<{
    image: File | null,
    title: string,
    description: string,
  }>({
    image: null,
    title: '',
    description: '',
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

  const storeNFT = async () => {
    setIsCreating(true)
    const nftStorageUrl = 'https://api.nft.storage/store'

    if (process.env.REACT_APP_NFT_STORAGE_KEY && !!imageInfo.image && imageInfo.title && imageInfo.description) {
      let formData = new FormData()
      const payload = {
        title: imageInfo.title,
        description: imageInfo.description,
      }

      formData.append('image', imageInfo.image as File)
      formData.append('meta', JSON.stringify(payload))

      const result = await axios.post(nftStorageUrl, formData, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_NFT_STORAGE_KEY}`,
          'Content-Type': 'multipart/form-data',
        },
      })

      const metadataUrl = 'https://ipfs.io/ipfs/' + result.data.value.url.replace('ipfs://', '')

      dispatch(createArtwork.request({
        title: imageInfo.title,
        description: imageInfo.description,
        metadataUrl: metadataUrl,
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
      <div>
        this is create artwork page

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
          <button onClick={storeNFT} disabled={isCreating}>submit</button>
        </div>
      </div>
    </PageWrapper>
  )
}


export default CreateArtworkPage
