import { useState, useEffect, FormEvent } from 'react';

import * as C from './App.styles';
import * as Photos from './services/photo.ts';
import { Photo } from './types/photo.ts';
import { Photoitem } from './components/Photoitem/index.tsx';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  } 

  useEffect(() => {
  
    getPhotos();

  }, []);

  useEffect(() => {
    getPhotos();
  }, [deleted])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.uploadFile(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        setPhotos([...photos, result]);
      }
    }
  }

  const destroyFile = async (name: string) => {
    setDeleted(true);
    await Photos.deleteFile(name);
    setDeleted(false)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        {
          <C.UploadForm method='POST' onSubmit={ handleFormSubmit }>
            <input type="file" name="image" />
            <label htmlFor="#fileInputTrigger">Procurar imagem</label>
            <input type="submit" value="Enviar" id="fileInputTrigger"/>
            {uploading && "Enviando"}
          </C.UploadForm>
        }

        {loading &&
          <C.ScreenWarning>
            <div className="emoji">🤚</div>
            <div>Carregando</div>
          </C.ScreenWarning>
        }

        {!loading && photos.length == 0 && 
          <C.ScreenWarning>
            <div className="emoji">😢</div>
            <div>Não há fotos cadastradas :(</div>
          </C.ScreenWarning>
        } 

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index) => (
              <Photoitem key={index} name={item.name} url={item.url} remove={destroyFile} />
            ))}  
          </C.PhotoList>
        }

      </C.Area>        
    </C.Container>
  )
}

export default App;
