import { instance } from "@/utils/http";


export function getLikeListAPI( { limit=4 } ){
    return instance.request({
        url:'/goods/relevant',
        params:{
            limit
        }
    })
}