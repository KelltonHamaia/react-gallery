import * as C from './styles';

type Props = {
    name: string,
    url: string,
    remove: (filename: string) => void;
}
export const Photoitem = ({ name, url, remove }: Props) => {
    return (
        <C.Container>
            <img src={url} alt={name[0].toUpperCase()+name.slice(1)} />
            <div>
                <p>{name}</p>
                <button
                    onClick={() => remove(name)}
                >❌</button>
            </div>
        </C.Container>
    )
}