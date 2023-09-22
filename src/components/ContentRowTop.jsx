import React from 'react';
import image from '../assets/images/logo.png'
import { ContentRowMovies, LastMovieInDb, LastUserInDb, GenresInDb} from './index'

export default function ContentRowTop({categories, productCount, userCount, productOrder}) {
  return (
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <img className="w-60 text-center" src={image} alt="Mimimbrería" />
          </div>
                <ContentRowMovies productCount = {productCount} userCount = {userCount} productOrder = {productOrder} />
                
          <div className="row">
          <LastMovieInDb />
          <LastUserInDb />
                {/* <GenresInDb categories = {categories}/> */}
          </div>
    </div>

  );
}