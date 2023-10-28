import Container from "@/components/ui/container"; 
import Billboard from "@/components/billboard";

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";


export const revalidate = 0


// Página principal com banner vindo de Billboard
const HomePage = async () => {
    
    const products  = await getProducts({ isFeatured: true });
    const billboard = await getBillboard('e0f4312e-149e-4e8d-b65c-4956034ba179');


    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div>
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage;