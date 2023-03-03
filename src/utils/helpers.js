export const getCasesWithCategory = (businessCases, categoryData) => {
  return businessCases.filter(
    item => item.data.case_category.uid === categoryData
  )
}

export const countries = [
  {
    name: "Afghanistan",
  },
  {
    name: "Albania",
  },
  {
    name: "Algeria",
  },
  {
    name: "Andorra",
  },
  {
    name: "Angola",
  },
  {
    name: "Antigua and Barbuda",
  },
  {
    name: "Argentina",
  },
  {
    name: "Armenia",
  },
  {
    name: "Australia",
  },
  {
    name: "Austria",
  },
  {
    name: "Azerbaijan",
  },
  {
    name: "Bahamas",
  },
  {
    name: "Bahrain",
  },
  {
    name: "Bangladesh",
  },
  {
    name: "Barbados",
  },
  {
    name: "Belarus",
  },
  {
    name: "Belgium",
  },
  {
    name: "Belize",
  },
  {
    name: "Benin",
  },
  {
    name: "Bhutan",
  },
  {
    name: "Bolivia (Plurinational State of)",
  },
  {
    name: "Bosnia and Herzegovina",
  },
  {
    name: "Botswana",
  },
  {
    name: "Brazil",
  },
  {
    name: "Brunei Darussalam",
  },
  {
    name: "Bulgaria",
  },
  {
    name: "Burkina Faso",
  },
  {
    name: "Burundi",
  },
  {
    name: "Cabo Verde",
  },
  {
    name: "Cambodia",
  },
  {
    name: "Cameroon",
  },
  {
    name: "Canada",
  },
  {
    name: "Central African Republic",
  },
  {
    name: "Chad",
  },
  {
    name: "Chile",
  },
  {
    name: "China",
  },
  {
    name: "Colombia",
  },
  {
    name: "Comoros",
  },
  {
    name: "Congo",
  },
  {
    name: "Congo, Democratic Republic of the",
  },
  {
    name: "Costa Rica",
  },
  {
    name: "Côte d'Ivoire",
  },
  {
    name: "Croatia",
  },
  {
    name: "Cuba",
  },
  {
    name: "Cyprus",
  },
  {
    name: "Czechia",
  },
  {
    name: "Denmark",
  },
  {
    name: "Djibouti",
  },
  {
    name: "Dominica",
  },
  {
    name: "Dominican Republic",
  },
  {
    name: "Ecuador",
  },
  {
    name: "Egypt",
  },
  {
    name: "El Salvador",
  },
  {
    name: "Equatorial Guinea",
  },
  {
    name: "Eritrea",
  },
  {
    name: "Estonia",
  },
  {
    name: "Eswatini",
  },
  {
    name: "Ethiopia",
  },
  {
    name: "Fiji",
  },
  {
    name: "Finland",
  },
  {
    name: "France",
  },
  {
    name: "Gabon",
  },
  {
    name: "Gambia",
  },
  {
    name: "Georgia",
  },
  {
    name: "Germany",
  },
  {
    name: "Ghana",
  },
  {
    name: "Greece",
  },
  {
    name: "Grenada",
  },
  {
    name: "Guatemala",
  },
  {
    name: "Guinea",
  },
  {
    name: "Guinea-Bissau",
  },
  {
    name: "Guyana",
  },
  {
    name: "Haiti",
  },
  {
    name: "Honduras",
  },
  {
    name: "Hungary",
  },
  {
    name: "Iceland",
  },
  {
    name: "India",
  },
  {
    name: "Indonesia",
  },
  {
    name: "Iran (Islamic Republic of)",
  },
  {
    name: "Iraq",
  },
  {
    name: "Ireland",
  },
  {
    name: "Israel",
  },
  {
    name: "Italy",
  },
  {
    name: "Jamaica",
  },
  {
    name: "Japan",
  },
  {
    name: "Jordan",
  },
  {
    name: "Kazakhstan",
  },
  {
    name: "Kenya",
  },
  {
    name: "Kiribati",
  },
  {
    name: "Korea (Democratic People's Republic of)",
  },
  {
    name: "Korea, Republic of",
  },
  {
    name: "Kuwait",
  },
  {
    name: "Kyrgyzstan",
  },
  {
    name: "Lao People's Democratic Republic",
  },
  {
    name: "Latvia",
  },
  {
    name: "Lebanon",
  },
  {
    name: "Lesotho",
  },
  {
    name: "Liberia",
  },
  {
    name: "Libya",
  },
  {
    name: "Liechtenstein",
  },
  {
    name: "Lithuania",
  },
  {
    name: "Luxembourg",
  },
  {
    name: "Madagascar",
  },
  {
    name: "Malawi",
  },
  {
    name: "Malaysia",
  },
  {
    name: "Maldives",
  },
  {
    name: "Mali",
  },
  {
    name: "Malta",
  },
  {
    name: "Marshall Islands",
  },
  {
    name: "Mauritania",
  },
  {
    name: "Mauritius",
  },
  {
    name: "Mexico",
  },
  {
    name: "Micronesia (Federated States of)",
  },
  {
    name: "Moldova, Republic of",
  },
  {
    name: "Monaco",
  },
  {
    name: "Mongolia",
  },
  {
    name: "Montenegro",
  },
  {
    name: "Morocco",
  },
  {
    name: "Mozambique",
  },
  {
    name: "Myanmar",
  },
  {
    name: "Namibia",
  },
  {
    name: "Nauru",
  },
  {
    name: "Nepal",
  },
  {
    name: "Netherlands",
  },
  {
    name: "New Zealand",
  },
  {
    name: "Nicaragua",
  },
  {
    name: "Niger",
  },
  {
    name: "Nigeria",
  },
  {
    name: "North Macedonia",
  },
  {
    name: "Norway",
  },
  {
    name: "Oman",
  },
  {
    name: "Pakistan",
  },
  {
    name: "Palau",
  },
  {
    name: "Panama",
  },
  {
    name: "Papua New Guinea",
  },
  {
    name: "Paraguay",
  },
  {
    name: "Peru",
  },
  {
    name: "Philippines",
  },
  {
    name: "Poland",
  },
  {
    name: "Portugal",
  },
  {
    name: "Qatar",
  },
  {
    name: "Romania",
  },
  {
    name: "Russian Federation",
  },
  {
    name: "Rwanda",
  },
  {
    name: "Saint Kitts and Nevis",
  },
  {
    name: "Saint Lucia",
  },
  {
    name: "Saint Vincent and the Grenadines",
  },
  {
    name: "Samoa",
  },
  {
    name: "San Marino",
  },
  {
    name: "Sao Tome and Principe",
  },
  {
    name: "Saudi Arabia",
  },
  {
    name: "Senegal",
  },
  {
    name: "Serbia",
  },
  {
    name: "Seychelles",
  },
  {
    name: "Sierra Leone",
  },
  {
    name: "Singapore",
  },
  {
    name: "Slovakia",
  },
  {
    name: "Slovenia",
  },
  {
    name: "Solomon Islands",
  },
  {
    name: "Somalia",
  },
  {
    name: "South Africa",
  },
  {
    name: "South Sudan",
  },
  {
    name: "Spain",
  },
  {
    name: "Sri Lanka",
  },
  {
    name: "Sudan",
  },
  {
    name: "Suriname",
  },
  {
    name: "Sweden",
  },
  {
    name: "Switzerland",
  },
  {
    name: "Syrian Arab Republic",
  },
  {
    name: "Tajikistan",
  },
  {
    name: "Tanzania, United Republic of",
  },
  {
    name: "Thailand",
  },
  {
    name: "Timor-Leste",
  },
  {
    name: "Togo",
  },
  {
    name: "Tonga",
  },
  {
    name: "Trinidad and Tobago",
  },
  {
    name: "Tunisia",
  },
  {
    name: "Türkiye",
  },
  {
    name: "Turkmenistan",
  },
  {
    name: "Tuvalu",
  },
  {
    name: "Uganda",
  },
  {
    name: "Ukraine",
  },
  {
    name: "United Arab Emirates",
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
  },
  {
    name: "United States of America",
  },
  {
    name: "Uruguay",
  },
  {
    name: "Uzbekistan",
  },
  {
    name: "Vanuatu",
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
  },
  {
    name: "Viet Nam",
  },
  {
    name: "Yemen",
  },
  {
    name: "Zambia",
  },
  {
    name: "Zimbabwe",
  },
]
