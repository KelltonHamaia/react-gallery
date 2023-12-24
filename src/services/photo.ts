import { Photo } from "../types/photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4  as createId} from "uuid";

export const getAll = async ():Promise<Photo[]> => {
    const list:Photo[] = [];

    const imageFolder = ref(storage, "images");
    const photoList = await listAll(imageFolder);

    for (let i in photoList.items) {
        const photoURL = await getDownloadURL(photoList.items[i]);
        list.push({
            name: photoList.items[i].name,
            url: photoURL
        })
    }
    return list;
}

export const uploadFile = async (file: File) => {
    const fileType = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
    if (fileType.includes(file.type)) {

        let randomName = `${createId()}.${file.type.split("/")[1]}`;
        let newFile = ref(storage, `images/${randomName}`);
        let upload = await uploadBytes(newFile, file);
        let photoURL = await getDownloadURL(upload.ref);

        return { name: upload.ref.name, url: photoURL } as Photo;
    } else {
        return new Error("Tipo de arquivo não suportado");
    }
}


export const deleteFile = async (name: string) => {

    const removedFileRed = ref(storage, `images/${name}`);    
    let data = await deleteObject(removedFileRed);
    return data;
}