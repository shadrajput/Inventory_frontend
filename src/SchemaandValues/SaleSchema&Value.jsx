import * as Yup from "yup";

const validFileExtensions = { image: ['jpg', 'png', 'jpeg'] };

function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

export const SaleSchema = Yup.object({
    Name: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(2, "Minimum 2 characters are required")
        .required("Please Enter Full Name")
        .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

    MobileNo: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(10, "Please enter valid mobile no")
        .max(10, "Please enter valid mobile no")
        .required("Please Enter Mobile Number"),

    Invoiceno: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(10, "Please enter valid invoice no")
        .max(10, "Please enter valid invoice no")
        .required("Please Enter Invoice Number"),
});


export const initialValues = {
    Name: "",
    MobileNo: "",
    Invoiceno: "",
}