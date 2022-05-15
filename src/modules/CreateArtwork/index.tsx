import React, { ChangeEvent, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { GrayColors } from 'styles/colors'
import { RootState } from 'store'
import axios from 'axios'
import { clearArtworkReducer, createArtwork } from 'store/Artwork/actions'
import Input from 'components/forms/Input'
import Button from 'components/Button'
import H3 from 'components/typographies/H3'
import H2 from 'components/typographies/H2'
import { useHistory } from 'react-router-dom'


const CreateArtwork = () => {
  const history = useHistory()
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

  const [previewImageUrl, setPreviewImageUrl] = useState<any>('')

  const [isCreating, setIsCreating] = useState(false)

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length !== 1) {
      return
    }

    const file = e.target.files[0]

    var reader = new FileReader()

    reader.addEventListener('load', function() {
      setPreviewImageUrl(reader.result || '')
      // console.log(1111, reader.result);
    }, false)

    reader.readAsDataURL(file)

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
    if (process.env.REACT_APP_NFT_STORAGE_KEY && !!imageInfo.image && imageInfo.title && imageInfo.description) {
      window.scrollTo(0, 0);
      setIsCreating(true)

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
      history.push('/artworks/my')
    } else if (isSuccessCreateArtwork === false) {
      alert('artwork 생성 실패')
      setIsCreating(false)
    }
  }, [isSuccessCreateArtwork, history])

  useEffect(() => {
    return () => {
      dispatch(clearArtworkReducer())
    }
  }, [dispatch])

  return (
    <Wrapper>
      {isCreating && <>
        <Disabler />
        <DisablerContents>
          <H2 fontColor={GrayColors.gray800}>
            토큰을 생성중입니다.
          </H2>
          <H2 fontColor={GrayColors.gray800}>
            잠시 기다려주세요.
          </H2>
        </DisablerContents>
      </>}
      <LabelWrapper>
        <ImageInput type='file' id='image' onChange={handleFile} />
        <ImageUploadLabel htmlFor='image'>
          {
            imageInfo.image ? <PreviewImage src={previewImageUrl || ''} /> : <H3>upload image</H3>
          }
        </ImageUploadLabel>
      </LabelWrapper>

      <Label>
        작품 이름
      </Label>

      <InputWrapper>
        <Input name='title' onChange={handleFieldChange} />
      </InputWrapper>

      <Label>
        작품 설명
      </Label>

      <InputWrapper>
        <Input name='description' onChange={handleFieldChange} />
      </InputWrapper>

      <Label>
        작가 이름
      </Label>

      <InputWrapper>
        <Input name='authorName' onChange={handleFieldChange} />
      </InputWrapper>

      <Label>
        작가 설명
      </Label>

      <InputWrapper>
        <Input name='authorDescription' onChange={handleFieldChange} />
      </InputWrapper>

      <ButtonWrapper>
        <Button onClick={storeNFT} disabled={isCreating}>
          NFT 등록하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 20px;
`

const Label = styled.div`
  margin-top: 31px;

  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: ${GrayColors.gray500};
`

const InputWrapper = styled.div`
  margin-top: 8px;
`

const LabelWrapper = styled.div`
  border: solid 1px #868e96;
  border-radius: 10px;
  padding: 10px;
`

const ImageUploadLabel = styled.label`
  width: 100%;
  text-align: center;
`

const PreviewImage = styled.img`
  width: 100%;
`

const ImageInput = styled.input`
  display: none;
`

const ButtonWrapper = styled.div`
  margin-top: 100px;
`

const Disabler = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
`

const DisablerContents = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: white;
`

export default CreateArtwork
