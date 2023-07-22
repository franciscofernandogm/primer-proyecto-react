import CryptoJS from 'crypto-js';

export function ButtonMarvelApi(){
    
    // Claves de acceso de Marvel
    const public_key = "5cc02ffba876164a47f9e77c27580f6e";
    const private_key = "2de2188f8a71ab45e4255e8674fe92763bc1b63e";

    const openMarvelApi=()=>{
        // Obtener el timestamp actual en formato Unix
        const timestamp = Date.now().toString();

        // Construir la cadena para calcular el hash
        const cadena_para_hash = timestamp + private_key + public_key;

        // Calcular el hash utilizando HMAC-SHA256
        const hash = CryptoJS.MD5(cadena_para_hash).toString(CryptoJS.enc.Hex);
        const baseUrl='https://gateway.marvel.com/v1/public/characters'
        const url=baseUrl+'?apikey='+public_key+'&ts='+timestamp+'&hash='+hash+'&nameStartsWith=Guardians of the Galaxy&limit=20&offset=60'
        window.open(url,'_blank')
    }

    return(
        <div className='pokemon-api-button'>
            <button 
            onClick={openMarvelApi}>
                Ver Marvel Api
            </button>
        </div>
    )
}