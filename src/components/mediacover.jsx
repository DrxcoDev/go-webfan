import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function MediaCover() {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      className='pr-[200px]'
    >
    <div className="grid grid-cols-1 justify-center flex items-center md:grid-cols-4 w-full">
        <Card component="li" sx={{ maxWidth: 300, flexGrow: 1, backgroundColor: 'transparent', border: 'none'}} className='mr-[50px] p-10 border border-gray-800 hover:blur-xs duration-800'>
            <CardCover className="flex justify-center items-center">
                <img
                className="max-w-[59%] scale-50 object-contain"
                src="https://api.iconify.design/devicon:google.svg"
                srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                loading="lazy"
                alt=""  
                />
            </CardCover>

            <CardContent>
                <Typography
                level="body-lg"
                textColor="#fff"
                sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                >
                </Typography>
            </CardContent>
        </Card>


        <Card component="li" sx={{ maxWidth: 300, flexGrow: 1, backgroundColor: 'black', border: 'none'}} className='mr-[50px] p-10 border border-gray-800 hover:blur-xs duration-800'>
            <CardCover className="flex justify-center items-center">
                <img
                className="max-w-[50%] scale-50 object-contain"
                src="https://api.iconify.design/logos:paypal.svg"
                srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                loading="lazy"
                alt=""
                />
            </CardCover>

            <CardContent>
                <Typography
                level="body-lg"
                textColor="#fff"
                sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                >
                </Typography>
            </CardContent>
        </Card>

        <Card component="li" sx={{ maxWidth: 300, flexGrow: 1, backgroundColor: 'black', border: 'none'}} className='mr-[50px] p-10 border border-gray-800 hover:blur-xs duration-800'>
            <CardCover className="flex justify-center items-center">
                <img
                className="max-w-[80%] scale-50 object-contain"
                src="https://go.dev/images/logos/american-express.svg"
                srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                loading="lazy"
                alt=""
                />
            </CardCover>

            <CardContent>
                <Typography
                level="body-lg"
                textColor="#fff"
                sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                >
                </Typography>
            </CardContent>
        </Card>

        <Card component="li" sx={{ maxWidth: 300, flexGrow: 1, backgroundColor: 'black', border: 'none'}} className='mr-[50px] p-10 border border-gray-800 hover:blur-xs duration-800'>
            <CardCover className="flex justify-center items-center">
                <img
                className="max-w-[68%] scale-50 object-contain"
                src="https://go.dev/images/logos/mercadolibre_light.svg"
                srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                loading="lazy"
                alt=""
                />
            </CardCover>

            <CardContent>
                <Typography
                level="body-lg"
                textColor="#fff"
                sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                >
                </Typography>
            </CardContent>
        </Card>
        </div>
    </Box>
  );
}
