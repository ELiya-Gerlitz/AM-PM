class ProductModel{
    public productId: number
    public name: string
    public dateTime : string
    public expirationDateTime : string
    public price : number
    public categoryId : number

    public constructor(product :ProductModel){
        this.productId = product.productId
        this.name = product.name
        this.dateTime = product.dateTime
        this.expirationDateTime = product.expirationDateTime
        this.price = product.price
        this.categoryId = product.categoryId

    }
}
export default ProductModel