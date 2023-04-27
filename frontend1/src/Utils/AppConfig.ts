class AppConfig{
    public getAllCategoriesURL = "http://localhost:3001/api/categories/"
    public getAllProductsAccordingToCategoryIdURL = "http://localhost:3001/api/products-by-categoryId/"
    public postProdURL = "http://localhost:3001/api/products/"

}
const appConfig = new AppConfig()
export default appConfig