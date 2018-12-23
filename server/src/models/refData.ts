/**
 * Here we can define schema
 */

enum CustomersType {
  "small" = 1,
  "big" = 2
}
interface Validator {
  name: string;
  validator: string;
  message: string;
}
interface FormsFields {
  label?: string;
  name?: string;
  inputType?: string;
  options?: any[];
  type: string;
  value?: any;
  validations?: Validator[];
  required?: boolean;
  CustomerType: CustomersType;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

interface ColoumnFields {
  dataIndex: string;
  display: boolean;
  className?: string;
  order: number;
  displayTitle: string;
  enableSorting?: boolean;
  sortingDirection?: string;
  indexType?: string;
  displayFormat?: string;
  action?: string;
  actionClass?: string;
}

interface ReferenceData {
  CustomerForms: FormsFields[];
  Grid?: ColoumnFields[];
}
const calculateMaxDateYear = (years: number): Date => {
  const date = new Date();
  return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
};
const countryOptions: any[] = [
  {
    value: "Denmark",
    displayValue: "Denmark"
  },
  {
    value: "Sweden",
    displayValue: "Sweden"
  },
  {
    value: "Norway",
    displayValue: "Norway"
  }
];
const RefData: ReferenceData = {
  Grid: [
    {
      dataIndex: "name",
      display: true,
      order: 1,
      displayTitle: "Name",
      enableSorting: true,
      sortingDirection: "asc",
      className: "col-4 col-sm-2"
    },
    {
      dataIndex: "country",
      display: true,
      order: 2,
      displayTitle: "Country",
      enableSorting: true,
      sortingDirection: "asc",
      className: "col-4 col-sm-2"
    },
    {
      dataIndex: "contractExpiryDate",
      display: true,
      order: 3,
      displayTitle: "Expiry Date",
      enableSorting: true,
      sortingDirection: "asc",
      className: "col-4 col-sm-3",
      indexType: "date",
      displayFormat: "DD-MM-YYYY"
    },
    {
      dataIndex: "numberOfEmployees",
      display: true,
      order: 4,
      displayTitle: "Employees",
      enableSorting: false,
      sortingDirection: "asc",
      className: "col-4 col-sm-1"
    },
    {
      dataIndex: "complianceChecked",
      display: true,
      order: 5,
      displayTitle: "Compliance Checked",
      enableSorting: false,
      sortingDirection: "asc",
      className: "col-4 col-sm-1"
    },
    {
      dataIndex: "annualTurnover",
      display: true,
      order: 6,
      displayTitle: "Annual Turnover",
      enableSorting: false,
      sortingDirection: "asc",
      className: "col-4 col-sm-2"
    },
    {
      dataIndex: "action",
      display: true,
      order: 7,
      displayTitle: "",
      enableSorting: false,
      className: "col-4 col-sm-1",
      action: "delete",
      actionClass: "fa fa-edit"
    }
  ],
  CustomerForms: [
    {
      CustomerType: CustomersType["small"],
      type: "input",
      name: "name",
      label: "Name",
      required: true,
      disabled: false,
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Name required"
        }
      ]
    },
    {
      CustomerType: CustomersType["small"],
      type: "select",
      name: "country",
      label: "Country",
      required: true,
      options: countryOptions,
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Country required"
        }
      ]
    },
    {
      CustomerType: CustomersType["small"],
      type: "input",
      name: "websiteUrl",
      label: "Website",
      required: false
    },
    {
      CustomerType: CustomersType["small"],
      type: "input",
      name: "numberOfEmployees",
      label: "Total Employees",
      required: true,
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Number of employees required"
        },
        {
          name: "pattern",
          validator: "positiveNumber",
          message: "Only Positive numbers"
        }
      ]
    },
    {
      CustomerType: CustomersType["small"],
      type: "dateTimePicker",
      name: "contractExpiryDate",
      label: "Contract Expiry Date",
      required: true,
      disabled: true,
      maxDate: calculateMaxDateYear(2),
      minDate: new Date()
    },
    {
      CustomerType: CustomersType["big"],
      type: "input",
      name: "name",
      label: "Name",
      required: true,
      disabled: false,
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Name required"
        }
      ]
    },
    {
      CustomerType: CustomersType["big"],
      type: "select",
      name: "country",
      label: "Country",
      required: true,
      options: countryOptions,
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Country required"
        }
      ]
    },
    {
      CustomerType: CustomersType["big"],
      type: "input",
      name: "websiteUrl",
      label: "Website",
      required: false
    },
    {
      CustomerType: CustomersType["big"],
      type: "dateTimePicker",
      name: "contractExpiryDate",
      required: true,
      disabled: true,
      label: "Contract Expiry Date",
      maxDate: calculateMaxDateYear(3),
      minDate: new Date()
    },
    {
      CustomerType: CustomersType["big"],
      type: "input",
      name: "annualTurnover",
      required: true,
      label: "Annual Turnover",
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Annual Turnover required"
        },
        {
          name: "pattern",
          validator: "positiveNumber",
          message: "Only Positive numbers"
        }
      ]
    },
    {
      CustomerType: CustomersType["big"],
      type: "select",
      name: "complianceChecked",
      label: "Compliance Checked",
      required: true,
      options: [
        {
          key: "true",
          value: "True"
        },
        {
          key: "false",
          value: "False"
        }
      ],
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Check required"
        }
      ]
    }
  ]
};

export default RefData;
