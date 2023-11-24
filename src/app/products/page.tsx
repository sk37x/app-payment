import { 
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Stack,
    Button,
    Divider
} from '@mui/material';
import React from 'react';
import ProductCard from '@/app/ui/products/ProductCard';
// import { Typography } from '@mui/joy';

type Props = {

}

const Product = (props:Props) => {
    const data:string[] = [];
    
    return (
        <Box>
            <Box>Home / Product</Box>
            <Box padding='1rem 0rem'>
                <Divider  />
            </Box>
            <Stack spacing={2} direction={'column'}>
                <Stack direction='row' justifyContent={"space-between"}>
                    <Typography component={'h1'}>
                        Product page
                    </Typography>
                    <Button variant='contained'>
                        เพิ่มสินค้า
                    </Button>
                </Stack>
                <Box>
                    {
                        data.length ? 
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card>
                                    <CardContent>
                                        <div>Hello World</div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <div>Hello World</div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid> :
                        <Box minHeight={'70vh'} border={'1px solid #00000036'}>
                            <Stack direction='column' alignItems={"center"} justifyContent={"center"} height='70vh'>
                                <Typography component='h1'>
                                    ไม่มีข้อมูลสินค้า
                                </Typography>

                            </Stack>
                        </Box>
                    }
                </Box>
            </Stack>
        </Box>
    )
};

export default Product