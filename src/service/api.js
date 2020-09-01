import {http} from './config'

export default{

    listar:(tipo,chave) =>{
        return http.get('?'+tipo+'='+chave+'&apikey=a91a9fb4')

    }

}