export const MyMiddleware = (req, res, next) => {
    console.log('Coimg here first', typeof(req?.query?.name));
    if((req?.query?.name).length === 8){
        next();
    } else {
        res?.send('Please enter 8 char')
    }
}