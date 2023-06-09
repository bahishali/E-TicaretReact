import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {

  const[name, setName] = useState(); 
  const[password, setPassword] = useState(); 
  const[result, setResult] = useState(); 

  const myButtonClick = async () => {
     let requestBody = {
       service_val_name:name,
       service_val_password:password
     }

     const response = await axios.post (
       'https://www.mockachino.com/1b9b9eca-13b9-41/login',
        requestBody
     );

    //  console.log("Request:" + JSON.stringify(requestBody) );
    
    //  console.log("Resp:" + JSON.stringify(response.data.result));

     if (response.data.result=="success") {
        setResult("Giriş Başarılı");

    } else {
          setResult("Hatalı kullanıcı adı veya şifre");
    }
    console.log("Resp:" + result );
    alert(response.data.result);

    // if (response.data.result=="success") {
    // localStorage.setItem("userName", "onurkulabas")
    // navigate('/secret-page', { replace: true });
    // } else {
    // setResult('Hatalı Kullanıcı Adı veya Şifre');
    // }

}

  return (
  
   <>
      <div className ="login">

      <link href="assets/admin/pages/css/login.css" rel="stylesheet" type="text/css" />

        {/* BEGIN SIDEBAR TOGGLER BUTTON */}
        <div className="menu-toggler sidebar-toggler">
        </div>
        {/* END SIDEBAR TOGGLER BUTTON */}
        {/* BEGIN LOGO */}
        <div className="logo">
          <a href="index.html">
            <img src="assets/admin/layout3/img/logo-big.png" alt="" />
          </a>
        </div>
        
        {/* END LOGO */}
        {/* BEGIN LOGIN */}
        <div className="content">
          {/* BEGIN LOGIN FORM */}
          <form className="login-form" >
            <h3 className="form-title">Login</h3>
            <div className="alert alert-danger display-hide">
              <button className="close" data-close="alert" />
              <span>
                Kullanıcı adı ve şifre girin </span>
            </div>
            <div className="form-group">
              {/ie8, ie9 does not support html5 placeholder, so we just show field title for that/}
              <label className="control-label visible-ie8 visible-ie9">Username</label>
              <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Kullanıcı Adı" name="username" onChange={e=>setName(e.target.value)} />
              
            </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Password</label>
              <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Şifrenizi giriniz" name="password" onChange={e=>setPassword(e.target.value)}  />
            </div>
            <div className="form-actions">
              <a type="submit" className="btn btn-success uppercase" onClick={()=>myButtonClick()}>Login</a>
              <label className="rememberme check">
                <input type="checkbox" name="remember" defaultValue={1} /> Beni Hatırla!</label>
              <a href="javascript:;" id="forget-password" className="forget-password">Şifremi Unuttum.</a>
            </div>
            <div className="login-options">
              <h4>Ya da </h4>
              <ul className="social-icons">
                <li>
                  <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;" />
                </li>
                <li>
                  <a className="social-icon-color twitter" data-original-title="Twitter" href="javascript:;" />
                </li>
                <li>
                  <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;" />
                </li>
                <li>
                  <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;" />
                </li>
              </ul>
            </div>
            <div className="create-account">
              <p>
                <a href="javascript:;" id="register-btn" className="uppercase">Hesap oluştur</a>
              </p>
            </div>
          </form>
          {/* END LOGIN FORM */}
          {/* BEGIN FORGOT PASSWORD FORM */}
          <form className="forget-form" action="index.html" method="post">
            <h3>Şifreni mi Unuttun?</h3>
            <p>
              Şifreni değiştirmek için e-mail adresini gir.
            </p>
            <div className="form-group">
              <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Email" name="email" />
            </div>
            <div className="form-actions">
              <button type="button" id="back-btn" className="btn btn-default">Geri</button>
              <button type="submit" className="btn btn-success uppercase pull-right">Kaydet</button>
            </div>
          </form>
          {/* END FORGOT PASSWORD FORM */}
          {/* BEGIN REGISTRATION FORM */}
          <form className="register-form" action="index.html" method="post">
            <h3>Kaydol</h3>
            <p className="hint">
              Kişisel bilgilerinizi giriniz:
            </p>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Tam Ad</label>
              <input className="form-control placeholder-no-fix" type="text" placeholder="Tam ad" name="fullname" />
            </div>
            <div className="form-group">
              {/ie8, ie9 does not support html5 placeholder, so we just show field title for that/}
              <label className="control-label visible-ie8 visible-ie9">Email</label>
              <input className="form-control placeholder-no-fix" type="text" placeholder="Email" name="email" />
            </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Adres</label>
              <input className="form-control placeholder-no-fix" type="text" placeholder="Adres" name="address" />
            </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Şehir</label>
              <input className="form-control placeholder-no-fix" type="text" placeholder="Şehir" name="city" />
            </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Ülke</label>
              <select name="country" className="form-control">
                <option value>Ülke</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegowina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, the Democratic Republic of the</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote d'Ivoire</option>
                <option value="HR">Croatia (Hrvatska)</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard and Mc Donald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran (Islamic Republic of)</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea, Democratic People's Republic of</option>
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macau</option>
                <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint LUCIA</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia (Slovak Republic)</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">South Georgia and the South Sandwich Islands</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SH">St. Helena</option>
                <option value="PM">St. Pierre and Miquelon</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen Islands</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands (British)</option>
                <option value="VI">Virgin Islands (U.S.)</option>
                <option value="WF">Wallis and Futuna Islands</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
            </div>
            <p className="hint">
              Hesap bilgilerinizi giriniz.
            </p>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Kullanıcı Adı</label>
              <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Kullanıcı adı" name="username" />
            </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Şifre</label>
              <input className="form-control placeholder-no-fix" type="password" autoComplete="off" id="register_password" placeholder="Şifre" name="password" />
            </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Şifre</label>
              <input className="form-control placeholder-no-fix" type="password" autoComplete="off" placeholder="Şireyi yeniden giriniz" name="rpassword" />
            </div>
            <div className="form-group margin-top-20 margin-bottom-20">
              <label className="check">
                <input type="checkbox" name="tnc" /> Kabul ediyorum. <a href="javascript:;">
                  Terms of Service </a>
                &amp; <a href="javascript:;">
                  KVKK </a>
              </label>
              <div id="register_tnc_error">
              </div>
            </div>
            <div className="form-actions">
              <button type="button" id="register-back-btn" className="btn btn-default">Geri</button>
              <button type="submit" id="register-submit-btn" className="btn btn-success uppercase pull-right">Kaydet</button>
            </div>
          </form>
          {/* END REGISTRATION FORM */}
        </div>
        <div className="copyright">
          
        </div>
        {/* END LOGIN */}
        {/* BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) */}
        {/* BEGIN CORE PLUGINS */}
        {/*[if lt IE 9]>

 
          <![endif]*/}
                  {/* END CORE PLUGINS */}
                  {/* BEGIN PAGE LEVEL PLUGINS */}
                  {/* END PAGE LEVEL PLUGINS */}
                  {/* BEGIN PAGE LEVEL SCRIPTS */}
                  {/* END PAGE LEVEL SCRIPTS */}
                  {/* END JAVASCRIPTS */}
                </div>
   
    </>

  );
}

export default Login;