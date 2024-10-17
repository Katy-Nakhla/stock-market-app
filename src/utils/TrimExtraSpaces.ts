
export const trimExtraSpaces=(value:string):string=>{
    return value.replace(/\s+/g,' ').trim();
}