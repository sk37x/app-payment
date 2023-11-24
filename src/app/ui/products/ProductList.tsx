import { Product } from '@/app/lib/definitions';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import React from 'react';
import NextImage from 'next/image'


type Props = {
    products?: Product[]
}

const ProductList = (props:Props) => {
    return (
        <></>
        // props.products &&
        // props.products.map((product, index) => {
        //     const imageUrl:string = product.images ? product.images[0] : '';
        //     console.log(imageUrl);
        //     return (
        //         <Grid xs={6}>
        //             <Card>
        //                 <CardContent>
        //                     {
        //                         imageUrl && 
        //                         <AspectRatio
        //                             variant="outlined"
        //                             ratio="1"
        //                         >
        //                             <img 
        //                                 src={imageUrl}
        //                                 width={200}
        //                                 height={200}
        //                                 alt={'product image'}
        //                             />
        //                         </AspectRatio>
        //                     }
        //                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                
        //                     </Typography>
        //                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //                     adjective
        //                     </Typography>
        //                     <Typography variant="body2">
        //                         well meaning and kindly.
        //                         <br />
        //                         {'"a benevolent smile"'}
        //                     </Typography>
        //                 </CardContent>
        //             </Card>
        //         </Grid>
        //     )
        // })
    )
};

export default ProductList