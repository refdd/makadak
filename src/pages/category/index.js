import * as React from 'react';
import Categories from '@/widgets/Categories/Categories';
import { categoriesDataMain } from '@/lib/constants';
import { useGetHomeCategoriesQuery } from '@/redux/apis/homeApi';
import { useMediaQuery } from '@mui/material';


export default function CategoriesPage(props) {
  const categoriesData = useGetHomeCategoriesQuery();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div style={{ height: '100vh' }}>
      <Categories seeAll={false} pageView={isMobile} title={'Browse by Category'} categoriesData={categoriesData?.data || []} />
    </div>
  )
}