import { BsShareFill, BsGithub, BsTwitter } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { useState } from 'react';
import personAvatar from '../assets/images/avatar-michelle.jpg';

export default function CardPreview() {
  const [socialSection, setSocialSection] = useState(true);
  const [isDesktop ,setIsDesktop] = useState(true)
  function toggleSocial() {
    setSocialSection((prev) => !prev);
  }

  return (
    <main className='card-preview-container'>
      <div className='preview-item'></div>
      <div className='preview'>
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
        {socialSection? (
          <div className='social-section'>
            <div className='social-flex'>
              <h4 className='text-share'>SHARE</h4>
              <div className='social-icons'>
                <a href='github.com/EnderCelik0'>
                  <BsGithub className='github' />
                </a>
                <a href='https://www.twitter.com/neysehllknk'>
                  <BsTwitter className='twitter' />
                </a>
                <a href='https://facebook.com'>
                  <AiFillFacebook className='facebook' />
                </a>
              </div>
            </div>
            <div className='share-img-social' onClick={toggleSocial}>
              <BsShareFill className='share' />
            </div>
          </div>
        ) : (
          <div className='person-info'>
            <div className='person-flex'>
              <img
                src={personAvatar}
                className='person-avatar'
                alt='person profile picture'
              />
              <div className='name-publish'>
                <p className='person-name'>Michelle Appleton</p>
                <p className='publish-date'>28 Jun 2020</p>
              </div>
            </div>

            <div className='share-img' onClick={toggleSocial}>
              <BsShareFill className='share' />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
