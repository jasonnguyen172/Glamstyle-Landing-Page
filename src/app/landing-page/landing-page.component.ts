import { Component, OnInit, HostListener, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
// import { Branch } from 'src/app/shared/models/branch';
import { CATEGORY, LOCATION } from 'src/app/configs/constants/constants';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
// import { RegisterHostService } from 'src/app/shared/services/register-host.service';
// import { UserService } from 'src/app/shared/services/user.service';
// import { LoaderServiceService } from 'src/app/shared/services/utilities/loader-service.service';
// import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
// import { ToastrService } from 'ngx-toastr';
import { NgAnimateScrollService } from 'ng-animate-scroll';

declare var $: any;

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  // @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  // @ViewChild('completedSignUp') modalContent: TemplateRef<any>;


  isScroll = false;
  isplay = false;
  isError = false;
  isLogin = false;
  bizName = '';
  specialize = '';
  employeeNumber = '';
  street = '';
  province = '';
  district = '';
  socailLink = '';
  lastName = '';
  firstName = '';
  email = '';
  phone = '';
  src = '';
  errorMessage = '';
  category = CATEGORY;
  locations = LOCATION;
  numberEmployee = ['1', '2', '3', '4', '5', '6', '7+'];
  srcKnow = ['Khách hàng giới thiệu', 'Salon khác giới thiệu', 'Quảng cáo trên báo/ tạp chí', 'Facebook/ Instagram/ Google',
  'Các sự kiện về tóc và salon', 'Quảng cáo truyền hình', 'Khác'];
  isMobileResolution = false;
  districsts = [];
  user: any = {};

  showDialogLogin = false;


  // tslint:disable-next-line:quotemark

  @HostListener('window:resize', ['$event'])
  onResizeZ(event) {
    // console.log('on resize = ' +  event.target.innerWidth);
    if (event.target.innerWidth >= 992) {
      this.isMobileResolution = false;
    } else {
      this.isMobileResolution = true;
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollIn = window.pageYOffset;
    if (scrollIn >= 200) {
      this.isScroll = true;
    } else if (this.isScroll && scrollIn < 200) {
      this.isScroll = false;
    }
  }


  constructor(
    private modalService: NgbModal,
    private router: Router,
    // private registerHost: RegisterHostService,
    // private userService: UserService,
    // private loaderService: LoaderServiceService,
    config: NgbRatingConfig,
    // private toastr: ToastrService,
    private animateScrollService: NgAnimateScrollService
    ) {
      config.max = 5;
      config.readonly = true;

  }

  // private showLoader(): void {
  //   console.log('show loader');
  //   this.loaderService.show();
  // }

  // private hideLoader(): void {
  //   console.log('hide loader');
  //   this.loaderService.hide();
  // }

  ngOnInit() {
    console.log(this.category)
    this.onWindowScroll();
    if (window.outerWidth >= 992) {
      this.isMobileResolution = false;
    } else {
      this.isMobileResolution = true;
    }
    
    // check login
    // if (localStorage.getItem('user') === undefined || localStorage.getItem('user') === null) {
    //   this.showDialogLogin = true;
    // } else {
    //   this.showDialogLogin = false;
    // }
  }

  ngAfterViewInit() {
  }

  showVideo() {
  }

  gotoFeature() {
    this.animateScrollService.scrollToElement('sec-2', 1000);
  }

  gotoFeatureID(id) {
    this.animateScrollService.scrollToElement(id, 1000);
  }

  gotoSign() {
    this.animateScrollService.scrollToElement('sec-6', 1000);

  }

  play() {
    if (!this.isMobileResolution) {
      window.scrollTo(0, 6568);
    } else {
      window.scrollTo(0, 9028);
    }
    this.isplay = true;
  }

  signUp(loginModal, verifyMobile) {
    // const branch = new Branch();
    this.isError = false;
    if (this.bizName.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập tên doanh nghiệp';
    } else if (this.specialize.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn lĩnh vực kinh doanh';
    } else if (this.employeeNumber.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn số lượng nhân viên';
    } else if (this.street.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập địa chỉ của bạn';
    } else if (this.province.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn thành phố';
    } else if (this.district.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn quận/huyện';
    } else if (this.firstName.length === 0 || this.lastName.length === 0 ) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập họ và tên';
    } else if (this.email.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập email';
    } else if (this.phone.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập số điện thoại';
    } else if (this.src.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn nguồn giới thiệu';
    }

    if (this.isError === false) {
      // this.checkLogin();
      // this.showLoader();
      // branch.name = this.bizName;
      // branch.specialize = this.specialize;
      // branch.streetAddress = this.street;
      // branch.city = this.province;
      // branch.district = this.district;
      // branch.contactName = this.lastName + ' ' + this.firstName;
      // branch.email = this.email;
      // branch.mobile = this.phone;
      // localStorage.setItem('branchSignup', JSON.stringify(branch));
      this.submitForm();
      // this.userService.getCurrentUser()
      // .subscribe(
      //   res => {
      //     console.log(res);
      //     this.isLogin = true;
      //     if (this.isLogin === true) {
      //       const user = JSON.parse(localStorage.getItem('user'));
      //       if (user.mobile !== branch.mobile) {
      //         user.mobile = branch.mobile;
      //       }
      //       user.email = branch.email;
      //       this.userService.updateUser(user)
      //       .subscribe(
      //         resp => {
      //           this.user = user;
      //           console.log('step sent otp: ', resp);
      //           this.hideLoader();
      //           this.registerHost.resentPTO()
      //           .subscribe(
      //             response => {
      //               console.log(response);
      //             },
      //             err => {
      //               console.log(err);
      //               this.toastr.error('', 'Không thể gửi mã xác nhận, vui lòng thử lại!');
      //             }
      //           );
      //           this.modalService.dismissAll();
      //           this.modalService.open(verifyMobile, { backdrop: 'static', centered: true });
      //         },
      //         err => {
      //           this.hideLoader();
      //           console.log(err);
      //           this.toastr.error('', 'Thông tin bạn điền vào chưa đúng, vui lòng kiểm tra lại!');
      //         }
      //       );
      //     } else {
      //       this.modalService.dismissAll();
      //       this.modalService.open(loginModal, { backdrop: 'static', centered: true, size: 'lg' });
      //     }
        // },
        // err => {
        //   this.hideLoader();
        //   console.log(err);
        //   this.modalService.dismissAll();
        //   this.modalService.open(loginModal, { backdrop: 'static', centered: true, size: 'lg' });
        // }
      // );
    }
  }

  loginCompleted(event) {
    this.showDialogLogin = false;
  }
  chooseService(serviceName) {
    this.specialize = serviceName;

  }

  chooseNumber(numberEmployee) {
    this.employeeNumber = numberEmployee;
  }

  chosseCity(city) {
    this.province = city;
    this.districsts = this.locations[0].county;
    this.district = this.locations[0].county[0];
  }

  chooseDistrict(districst) {
    this.district = districst;
  }

  chooseSource(src) {
    this.src = src;
  }

  login() {
    this.modalService.dismissAll();
    window.open('http://host.glamstyle.vn');
  }

  openPopup(content) {
    this.modalService.dismissAll();
    this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true, windowClass: 'modal-xxl' });
  }

  // checkLogin() {
  //   this.userService.getCurrentUser()
  //   .subscribe(
  //     res => {
  //       // console.log(res);
  //       this.isLogin = true;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  submitForm() {
    // form is: https://docs.google.com/spreadsheets/d/19TEVpGoPhPnmzmTse0MsYvhic_5jqSTMAy_VWqzF0P8/edit#gid=0

    const form = new FormData();
    form.append('bizName', this.bizName);
    form.append('specialize', this.specialize);
    form.append('employeeNumber', this.employeeNumber);
    form.append('province', this.province);
    form.append('district', this.district);
    form.append('streetAddress', this.street);
    form.append('socailLink', this.socailLink);
    form.append('lastName', this.lastName);
    form.append('firstName', this.firstName);
    form.append('email', this.email);
    form.append('phone', this.phone);
    form.append('src', this.src);

    const settings = {
      // tslint:disable-next-line:object-literal-key-quotes
      'async': true,
      // tslint:disable-next-line:object-literal-key-quotes
      'crossDomain': true,
      // tslint:disable-next-line:object-literal-key-quotes
      'url': 'https://script.google.com/macros/s/AKfycbzfEICDQEJjX3CopKlOSO4BAWUMq1TAkHT-qnnbviHYtyLoxQ/exec',
      // tslint:disable-next-line:object-literal-key-quotes
      'method': 'POST',
      // tslint:disable-next-line:object-literal-key-quotes
      'processData': false,
      // tslint:disable-next-line:object-literal-key-quotes
      'contentType': false,
      // tslint:disable-next-line:object-literal-key-quotes
      'mimeType': 'multipart/form-data',
      // tslint:disable-next-line:object-literal-key-quotes
      'data': form
    };

    // tslint:disable-next-line:only-arrow-functions
    $.ajax(settings).done(function(response) {
      console.log(response);
    });
    // this.hideLoader();
    // this.modalService.open(this.modalContent, {backdrop: 'static', centered: true });

  }
}
export class DataToSend {
  name: string;
}
