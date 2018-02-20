import React from 'react'
import { withRouter } from 'react-router'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import logo from 'Theme/assets/cmmc-logo.png'
import configIcon from 'Theme/assets/config.svg'

const Header = ({location: { pathname }}) => (
  <div className='header-wrapper'>
      {
        (pathname==='/contents') 
        ? (
          <div className='header'>
            <img src={logo} alt="" className='logo'/>

            <div className='search'>
              <input type='text' className='search__input' placeholder='Filter devices by name...'/>
              <button className='search__button'></button>
            </div>

            <div>
              <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="small" name="size" />
                <label htmlFor="small" className="form__radio-label">
                  <span className="form__radio-btn"></span>
                  Online
                </label>
              </div>

              <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="large" name="size" />
                <label htmlFor="large" className="form__radio-label">
                  <span className="form__radio-btn"></span>
                  Offline
                </label>
              </div>
        
            </div>
            
            <div className='config-wrapper'>
              <Link to='/connect' >
                <div className='icon-nav' dangerouslySetInnerHTML={{ __html: configIcon }}></div>
              </Link>

              <button className='btn btn--orange' type='submit' >disconnect</button>
            </div>

          </div>
       )
       : (
        <img src={logo} alt="" className='logo'/>
       )}
      
  </div>
)

export default compose(
  withRouter
)(Header)