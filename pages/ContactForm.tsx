/* eslint-disable @next/next/no-css-tags */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Head from "next/head";

const ContactForm = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link
          rel="stylesheet"
          href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"
        />
        <style>{`
          textarea {
            display: block !important;
            width: 100% !important;
            height: auto !important;
            padding: 6px 12px !important;
            font-size: 14px !important;
            line-height: 1.42857143 !important;
            color: #555 !important;
            background-color: #fff !important;
            background-image: none !important;
            border: 1px solid #ccc !important;
            border-radius: 4px !important;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075) !important;
          }
          img.bg-img {
            min-height: 10%;
            height: auto;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 0;
          }
          legend {
            margin-top: 15px;
          }
          input,
          button,
          select,
          textarea {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }
          input,
          select {
            display: block;
            width: 100% !important;
            height: 34px !important;
            padding: 6px 12px;
            font-size: 14px !important;
            line-height: 1.428571429;
            color: #555555;
            vertical-align: middle;
            background-color: #ffffff;
            background-image: none;
            border: 1px solid #cccccc;
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -webkit-transition: border-color ease-in-out 0.15s,
              box-shadow ease-in-out 0.15s;
            transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
          }
          input:focus,
          select:focus {
            border-color: #66afe9;
            outline: 0;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
              0 0 8px rgba(102, 175, 233, 0.6);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
              0 0 8px rgba(102, 175, 233, 0.6);
          }
          input:-moz-placeholder {
            color: #999999;
          }
          input::-moz-placeholder {
            color: #999999;
            opacity: 1;
          }
          input:-ms-input-placeholder {
            color: #999999;
          }
          input::-webkit-input-placeholder {
            color: #999999;
          }
          input[disabled],
          input[readonly],
          fieldset[disabled] input {
            cursor: not-allowed;
            background-color: #eeeeee;
          }
          textarea {
            height: auto;
          }
          button,
          input,
          select,
          textarea {
            font-family: inherit;
            font-size: 100%;
            margin: 0;
          }
          button,
          input {
            line-height: normal;
          }
          button,
          select {
            text-transform: none;
          }
          button,
          html input[type="button"],
          input[type="reset"],
          input[type="submit"] {
            -webkit-appearance: button;
            cursor: pointer;
          }
          .form-group {
            margin-bottom: 15px;
          }
          .form-action {
            margin-top: 20px;
          }
        `}</style>
      </Head>
      <div className="container">
        <br />
        <div className="row">
          <header className="col-md-9">
            <div className="page-header">
              <h1>Questions? Comments? Contact Us.</h1>
            </div>
          </header>
        </div>
        <div className="row">
          <form role="form">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <legend>Contact Information</legend>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="firstname">
                          First name *
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="lastname">
                          Last name *
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="email">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="title">
                          Job title
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <legend>Company Details</legend>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="companyname">
                          Company name *
                        </label>
                        <input
                          type="text"
                          id="companyname"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="city">
                          City
                        </label>
                        <input type="text" id="city" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="state">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="zipcode">
                          Zip/postal code *
                        </label>
                        <input
                          type="text"
                          id="zipcode"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="country">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="comments">
                          Comments
                        </label>
                        <textarea id="comments" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="control-group">
                        <label className="control-label" htmlFor="subsidiary">
                          Subsidiary
                        </label>
                        <input
                          type="text"
                          id="subsidiary"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-action">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary btn-block"
                        >
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-9">
          <hr />
          <footer className="text-muted">
            <p className="pull-right">* Required fields</p>
            <p>© NetSuite</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
