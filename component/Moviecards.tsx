'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActionArea, IconButton, Modal } from '@mui/material';
import page from '../app/home/page.module.css';
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';

export default function MovieCard({ name, description, img,showFav=true }: { name: string; description: string; img: string,showFav?:boolean }) {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card sx={{ maxWidth: 450, minHeight: 300 }} className={page.Card}>
        <CardActionArea onClick={openModal}>
          <CardMedia
            component="img"
            height="250"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <div className={page.Fontname}>
              {name}
            </div>
            <div className={page.Fontdescription}>
              {description}
            </div>
          </CardContent>
          {showFav && <Button className={page.FavouriteButton}variant="contained">add to favourite</Button>}
        </CardActionArea>
      </Card>
      <Modal  sx={{
    '& .MuiModal-backdrop': {
      'background': 'none'
    },
  }}
      className={page.Moviedetailsmodal} open={open} onClose={handleClose}>
         <Box>
        <div className={page.Modalcontent}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
          <Image
            className={page.Modalimage}
            src={`${img}`}
            alt="search"
            height={100}
            width={100}
          />
        </div>
        <div className={page.Moviedetailsmodaltitle}>{name}</div>
        <div className={page.Moviedetailsmodaldescription}>{description}</div>
        </Box>
      </Modal>
    </>
  );
}