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

            <div className='filter-status'>
              <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="all" name="size" checked={true}/>
                <label htmlFor="all" className="form__radio-label">
                  <span className="form__radio-btn form__radio-btn--all"></span>
                  All status
                </label>
              </div>

              <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="online" name="size" />
                <label htmlFor="online" className="form__radio-label">
                  <span className="form__radio-btn form__radio-btn--online"></span>
                  Online
                </label>
              </div>

              <div className="form__radio-group">
                <input type="radio" className="form__radio-input" id="ofline" name="size" />
                <label htmlFor="ofline" className="form__radio-label">
                  <span className="form__radio-btn form__radio-btn--ofline"></span>
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