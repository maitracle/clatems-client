import React, { ChangeEvent, useState } from 'react';

import PageWrapper from 'components/layouts/PageWrapper';
import axios from 'axios';


const CreateArtworkPage = () => {
    const [imageInfo, setImageInfo] = useState<{
      image: File | null,
      title: string,
      description: string,
    }>({
      image: null,
      title: '',
      description: '',
    });

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length !== 1) {
        return;
      }

      const file = e.target.files[0];
      setImageInfo(prev => ({
        ...prev,
        image: file,
      }));
    };

    const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
      setImageInfo(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const storeNFT = async () => {
      const nftStorageUrl = 'https://api.nft.storage/store';

      if (process.env.REACT_APP_NFT_STORAGE_KEY && !!imageInfo.image && imageInfo.title && imageInfo.description) {
        let formData = new FormData();
        const payload = {
          title: imageInfo.title,
          description: imageInfo.description,
        };

        formData.append('image', imageInfo.image as File);
        formData.append('meta', JSON.stringify(payload));

        const result = await axios.post(nftStorageUrl, formData, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_NFT_STORAGE_KEY}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        const metadataUrl = 'https://ipfs.io/ipfs/' + result.data.value.url.replace('ipfs://', '');

        // do call minting api
      }
    };

    return (
      <PageWrapper>
        <div>
          this is create artwork page

          <div>
            <input type="file" onChange={handleFile}/>
          </div>

          <div>
            title: <input name="title" onChange={handleFieldChange}/>
          </div>

          <div>
            description: <input name="description" onChange={handleFieldChange}/>
          </div>

          <div>
            <button onClick={storeNFT}>submit</button>
          </div>
        </div>
      </PageWrapper>
    );
  }
;

export default CreateArtworkPage;
