import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { fetchProductItems, fetchProductPrice } from '@/app/lib/data';
import { Product } from '@/app/lib/definitions';
import ProductList from './ProductList';
import AspectRatio from '@mui/joy/AspectRatio';

type Props = {

}

const ProductCard = async ({}:Props) => {
    var products:Product[] = await fetchProductItems();

    return (
        <Grid container spacing={2}>
            {
                // products &&
                // <ProductList 
                //     products={products}
                // />
            }
            {/* <ProductList /> */}
        {products &&
            products.map((product, index) => {
                const imageUrl:string = product.images ? product.images[0] : '';
                // console.log(product, 'product')
                return (
                    <Grid xs={2} key={index}>
                        <Card>
                            <CardContent>
                                {
                                    imageUrl && 
                                    // <AspectRatio
                                    //     variant="outlined"
                                    //     ratio="1"
                                    // >
                                        <img 
                                            src={imageUrl}
                                            width={200}
                                            height={200}
                                            alt={'product image'}
                                        />
                                    // </AspectRatio>
                                }
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2">
                                    {product.description}
                                </Typography>
                                <Typography textAlign={'right'}>
                                    {product.default_price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })
        }

        </Grid>
    )
};

export default ProductCard