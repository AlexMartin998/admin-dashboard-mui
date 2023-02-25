import { Box, CircularProgress, useMediaQuery } from '@mui/material';

import { useGetProductsQuery } from '../../../store';
import { Header } from '../../shared';
import ProductCard from './ProductCard';

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery('(min-width: 1000px)');

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />

      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          // select any div child component of this box:
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          {data.map(product => (
            <ProductCard
              key={product._id}
              {...{ ...product, stat: product.stat[0] }}
            />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Products;
