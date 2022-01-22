import { EmailOutlined, LinkedIn, Twitter ,Pinterest,Facebook, Phone, AddLocationOutlined} from '@material-ui/icons'
import React from 'react'
import '../assets/css/footer.css'
const Footer = ()=>{
    return (
        <div className="footer-main">
            <div className="footer-container">
                <div className="row">
                    <div className="footer-top-box">
                        <h3>Thời gian mở cửa</h3>
                        <hr />
                        <ul className="list-time">
                            <li>Toàn thời gian:Thứ 2-Chủ Nhật</li>
                            <li>Hệ thống hỗ trợ khách hàng 24/24</li>
                        </ul>
                    </div>
                    <div className="footer-top-box">
                        <h3>Gửi mail phản hồi</h3>
                        <hr />
                        <form className="form-mail">
                            <div className="form-send">
                                <input className="input-email" type="email" placeholder="Nhập địa chỉ mail" />
                                <EmailOutlined type={{color:'gray',fontSite:16}} />
                            </div>
                        </form>
                        <div className="phone">
                            <Phone />
                            <h4 className="phone-number">0969168364</h4>
                        </div>
                    </div>
                    <div className="footer-top-box">
                        <h3>Mạng xã hội</h3>
                        <hr />
                        <p>Fastfood đã có trên các nền tảng mạng xã hội</p>
                        <div className="icon-footer">
                            <Facebook />
                        </div>
                        <div className="icon-footer">
                            <Twitter />
                        </div>
                        <div className="icon-footer">
                            <LinkedIn />
                        </div>
                        <div className="icon-footer">
                            <Pinterest />
                        </div>
                    </div>
                </div>
                <hr className="hr" />
                <div className="row">
                    <div className="footer-widget">
                        <h4>About FastFood</h4>
                        <hr />
                        <p>FastFood là cửa hàng bán đồ ăn nhanh </p>
                        <p>Đồ ăn tại FastFood đảm bảo chất lượng 100%</p>
                    </div>
                    <div className="footer-link">
                        <h4>Information</h4>
                        <hr />
                        <ul>
                            <li><a className="a" href="#">About Us</a></li>
                            <li><a className="a" href="#">Customer Service</a></li>
                            <li><a className="a" href="#">Our Sitemap</a></li>
                            <li><a className="a" href="#">Terms &amp; Conditions</a></li>
                            <li><a className="a" href="#">Privacy Policy</a></li>
                            <li><a className="a" href="#">Delivery Information</a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>Contact Us</h4>
                        <hr />
                        <div className="address">
                            <EmailOutlined />
                            <h4 className="CS-1">Email:datdudan2k@gmail.com</h4>
                        </div>
                        <div className="address">
                            <AddLocationOutlined />
                            <h4 className="CS-1">Cơ sở 1:235-Hoàng Quốc Việt</h4>
                        </div>
                        <div className="address">
                            <AddLocationOutlined />
                            <h4 className="CS-1">Cơ sở 2:Thụy Lâm-Đông Anh</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer