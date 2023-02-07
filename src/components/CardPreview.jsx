import previewItem from '../assets/images/drawers.jpg';
import shareImage from '../assets/images/icon-share.svg';
import personAvatar from '../assets/images/avatar-michelle.jpg';

export default function CardPreview() {
  return (
    <main className='card-preview-container'>
      <div className='preview-item'></div>
      <div className='preview-container'>
        <h4 className='preview-header'>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h4>
        <p className='preview-info'>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
      </div>
      <div className='person-info'>
        <div className='person-flex'>
          <img src={personAvatar} className='person-avatar' />
          <div className='person-publish'>
            <p className='person-name'>Michelle Appleton</p>
            <p className='publish-date'>28 Jun 2020</p>
          </div>
        </div>
        <div className='share-img'>
          <img src={shareImage} />
        </div>
      </div>
    </main>
  );
}
