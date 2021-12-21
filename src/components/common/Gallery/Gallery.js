import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import {useStyles} from './Gallery.theme.js';
import styles from './Gallery.module.scss';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const Component = ({className,photo1, photo2, photo3}) => {
  const classes = useStyles(); 
  return(
    <div className={clsx(className, styles.root, classes.root)}>
      <ImageList rowHeight={330} className={classes.imageList} cols={3}>
        <ImageListItem key={1} cols={1}>
          <img src={photo1} alt='Zdjęcie 1' />
        </ImageListItem>
        <ImageListItem key={2} cols={1}>
          <img src={photo2} alt='Zdjęcie 2' />
        </ImageListItem>
        <ImageListItem key={3} cols={1}>
          <img src={photo3} alt='Zdjęcie 3' />
        </ImageListItem>

      </ImageList>   
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  photo1: PropTypes.string,
  photo2: PropTypes.string,
  photo3: PropTypes.string,
};

export {
  Component as Gallery,
  Component as GalleryComponent,
};
