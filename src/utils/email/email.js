import nodemailer from "nodemailer"

export const generateEmailTemplate = (emailLink) => {
    return `
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <title></title>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--[if !mso]>-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="x-apple-disable-message-reformatting" content="" />
    <meta content="target-densitydpi=device-dpi" name="viewport" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width=device-width" name="viewport" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
    <style type="text/css">
        table {
            border-collapse: separate;
            table-layout: fixed;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt
        }

        table td {
            border-collapse: collapse
        }

        .ExternalClass {
            width: 100%
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%
        }

        body,
        a,
        li,
        p,
        h1,
        h2,
        h3 {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        html {
            -webkit-text-size-adjust: none !important
        }

        body,
        #innerTable {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        #innerTable img+div {
            display: none;
            display: none !important
        }

        img {
            Margin: 0;
            padding: 0;
            -ms-interpolation-mode: bicubic
        }

        h1,
        h2,
        h3,
        p,
        a {
            line-height: inherit;
            overflow-wrap: normal;
            white-space: normal;
            word-break: break-word
        }

        a {
            text-decoration: none
        }

        h1,
        h2,
        h3,
        p {
            min-width: 100% !important;
            width: 100% !important;
            max-width: 100% !important;
            display: inline-block !important;
            border: 0;
            padding: 0;
            margin: 0
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }

        u+#body a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }

        a[href^="mailto"],
        a[href^="tel"],
        a[href^="sms"] {
            color: inherit;
            text-decoration: none
        }
    </style>
    <style type="text/css">
        @media (min-width: 481px) {
            .hd {
                display: none !important
            }
        }
    </style>
    <style type="text/css">
        @media (max-width: 480px) {
            .hm {
                display: none !important
            }
        }
    </style>
    <style type="text/css">
        @media (max-width: 480px) {

            .t41,
            .t46 {
                mso-line-height-alt: 0px !important;
                line-height: 0 !important;
                display: none !important
            }

            .t42 {
                padding: 40px !important
            }

            .t44 {
                border-radius: 0 !important;
                width: 480px !important
            }

            .t15,
            .t39,
            .t9 {
                width: 398px !important
            }

            .t32 {
                text-align: left !important
            }

            .t25 {
                display: revert !important
            }

            .t27,
            .t31 {
                vertical-align: top !important;
                width: auto !important;
                max-width: 100% !important
            }
        }
    </style>
    <!--[if !mso]>-->
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&amp;family=Sofia+Sans:wght@700&amp;family=Open+Sans:wght@400;500;600&amp;display=swap"
        rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body id="body" class="t49" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;">
    <div class="t48" style="background-color:#FFFFFF;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center">
            <tr>
                <td class="t47" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;"
                    valign="top" align="center">
                    <!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"
                        id="innerTable">
                        <tr>
                            <td>
                                <div class="t41"
                                    style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">
                                    &nbsp;&nbsp;</div>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <table class="t45" role="presentation" cellpadding="0" cellspacing="0"
                                    style="Margin-left:auto;Margin-right:auto;">
                                    <tr>
                                        <!--[if mso]>
<td width="600" class="t44" style="background-color:#FFFFFF;border:1px solid #EBEBEB;overflow:hidden;width:600px;border-radius:3px 3px 3px 3px;">
<![endif]-->
                                        <!--[if !mso]>-->
                                        <td class="t44"
                                            style="background-color:#FFFFFF;border:1px solid #EBEBEB;overflow:hidden;width:600px;border-radius:3px 3px 3px 3px;">
                                            <!--<![endif]-->
                                            <table class="t43" role="presentation" cellpadding="0" cellspacing="0"
                                                width="100%" style="width:100%;">
                                                <tr>
                                                    <td class="t42" style="padding:44px 42px 32px 42px;">
                                                        <table role="presentation" width="100%" cellpadding="0"
                                                            cellspacing="0" style="width:100% !important;">
                                                            <tr>
                                                                <td align="left">
                                                                    <table class="t4" role="presentation"
                                                                        cellpadding="0" cellspacing="0"
                                                                        style="Margin-right:auto;">
                                                                        <tr>
                                                                            <!--[if mso]>
<td width="42" class="t3" style="width:42px;">
<![endif]-->
                                                                            <!--[if !mso]>-->
                                                                            <td class="t3" style="width:42px;">
                                                                                <!--<![endif]-->
                                                                                <table class="t2" role="presentation"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    width="100%" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t1">
                                                                                            <div style="font-size:0px;">
                                                                                                <img class="t0"
                                                                                                    style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                                                    width="42"
                                                                                                    height="42" alt=""
                                                                                                    src="https://16619adc-bb98-4d4d-af6f-315ecc7960e5.b-cdn.net/e/39238777-7f21-4747-9fb7-99368fa83196/27b53453-90d2-4c54-93f4-05d9df0a2358.png" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="t5"
                                                                        style="mso-line-height-rule:exactly;mso-line-height-alt:42px;line-height:42px;font-size:1px;display:block;">
                                                                        &nbsp;&nbsp;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center">
                                                                    <table class="t10" role="presentation"
                                                                        cellpadding="0" cellspacing="0"
                                                                        style="Margin-left:auto;Margin-right:auto;">
                                                                        <tr>
                                                                            <!--[if mso]>
<td width="514" class="t9" style="border-bottom:1px solid #EFF1F4;width:514px;">
<![endif]-->
                                                                            <!--[if !mso]>-->
                                                                            <td class="t9"
                                                                                style="border-bottom:1px solid #EFF1F4;width:514px;">
                                                                                <!--<![endif]-->
                                                                                <table class="t8" role="presentation"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    width="100%" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t7"
                                                                                            style="padding:0 0 18px 0;">
                                                                                            <h1 class="t6" style="margin:0;Margin:0;font-family:Montserrat,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:28px;font-weight:700;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                                                Confirm your account                                        
                                                                                            <h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="t11"
                                                                        style="mso-line-height-rule:exactly;mso-line-height-alt:18px;line-height:18px;font-size:1px;display:block;">
                                                                        &nbsp;&nbsp;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center">
                                                                    <table class="t16" role="presentation"
                                                                        cellpadding="0" cellspacing="0"
                                                                        style="Margin-left:auto;Margin-right:auto;">
                                                                        <tr>
                                                                            <!--[if mso]>
<td width="514" class="t15" style="width:514px;">
<![endif]-->
                                                                            <!--[if !mso]>-->
                                                                            <td class="t15" style="width:514px;">
                                                                                <!--<![endif]-->
                                                                                <table class="t14" role="presentation"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    width="100%" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t13">
                                                                                            <p class="t12"
                                                                                                style="margin:0;Margin:0;font-family:Open Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:25px;font-weight:400;font-style:normal;font-size:15px;text-decoration:none;text-transform:none;letter-spacing:-0.1px;direction:ltr;color:#141414;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                                                Please click the button
                                                                                                below to confirm your
                                                                                                email address and finish
                                                                                                setting up your account.
                                                                                                This link is valid for
                                                                                                1 hour.</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="t18"
                                                                        style="mso-line-height-rule:exactly;mso-line-height-alt:24px;line-height:24px;font-size:1px;display:block;">
                                                                        &nbsp;&nbsp;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left">
                                                                    <table class="t22" role="presentation"
                                                                        cellpadding="0" cellspacing="0"
                                                                        style="Margin-right:auto;">
                                                                        <tr>
                                                                            <!--[if mso]>
<td class="t21" style="background-color:#0666EB;overflow:hidden;width:auto;border-radius:40px 40px 40px 40px;">
<![endif]-->
                                                                            <!--[if !mso]>-->
                                                                            <td class="t21"
                                                                                style="background-color:#0666EB;overflow:hidden;width:auto;border-radius:40px 40px 40px 40px;">
                                                                                <!--<![endif]-->
                                                                                <table class="t20" role="presentation"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    style="width:auto;">
                                                                                    <tr>
                                                                                        <td class="t19"
                                                                                            style="text-align:center;line-height:34px;mso-line-height-rule:exactly;mso-text-raise:5px;padding:0 23px 0 23px;">
                                                                                            <span class="t17"
                                                                                                style="display:block;margin:0;Margin:0;font-family:Sofia Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;letter-spacing:-0.2px;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:5px;"><a href ="${emailLink}">Confirm</a></span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="t36"
                                                                        style="mso-line-height-rule:exactly;mso-line-height-alt:40px;line-height:40px;font-size:1px;display:block;">
                                                                        &nbsp;&nbsp;</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center">
                                                                    <table class="t40" role="presentation"
                                                                        cellpadding="0" cellspacing="0"
                                                                        style="Margin-left:auto;Margin-right:auto;">
                                                                        <tr>
                                                                            <!--[if mso]>
<td width="514" class="t39" style="border-top:1px solid #DFE1E4;width:514px;">
<![endif]-->
                                                                            <!--[if !mso]>-->
                                                                            <td class="t39"
                                                                                style="border-top:1px solid #DFE1E4;width:514px;">
                                                                                <!--<![endif]-->
                                                                                <table class="t38" role="presentation"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    width="100%" style="width:100%;">
                                                                                    <tr>
                                                                                        <td class="t37"
                                                                                            style="padding:24px 0 0 0;">
                                                                                            <div class="t35"
                                                                                                style="width:100%;text-align:left;">
                                                                                                <div class="t34"
                                                                                                    style="display:inline-block;">
                                                                                                    <table class="t33"
                                                                                                        role="presentation"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        align="left"
                                                                                                        valign="top">
                                                                                                        <tr class="t32">
                                                                                                            <td></td>
                                                                                  
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="t46"
                                    style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">
                                    &nbsp;&nbsp;</div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    <div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
</body>

</html>`
}
export const sendEmail = async ({ to = [], cc = "", bcc = "", subject = "Confirm-Email", text = "", html = "", attachments = [] } = {}) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: `"Saraha App" <${process.env.EMAIL}>`, // sender address
        to, // list of receivers
        cc,
        bcc,
        subject, // Subject line
        text, // plain text body
        html, // html body
        attachments
    });

    return info
}

