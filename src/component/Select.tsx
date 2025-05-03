// import React from "react";
// import Select, { SingleValue, MultiValue } from "react-select";

// export interface OptionType {
//   label: string;
//   value: string;
// }

// export interface SelectProps {
//   label: string;
//   placeholder: string | React.ReactNode;
//   onChange: (value: SingleValue<OptionType> | MultiValue<OptionType>) => void;
//   name: string;
//   options: OptionType[];
//   loading?: boolean;
//   value: SingleValue<OptionType> | MultiValue<OptionType> | null;
//   isClearable?: boolean;
//   isSearchable?: boolean;
//   menuIsOpen?: boolean;
//   defaultValue?: OptionType | OptionType[] | null;
//   closeMenuOnSelect?: boolean;
//   isDisabled?: boolean;
//   isMulti?: boolean;
//   height?: number;
// }

// const ReactSelect: React.FC<SelectProps> = ({
//   label,
//   placeholder,
//   onChange,
//   name,
//   options,
//   value,
//   loading = false,
//   isClearable = false,
//   isSearchable = true,
//   menuIsOpen,
//   defaultValue,
//   closeMenuOnSelect = true,
//   isDisabled = false,
//   isMulti = false,
//   height = 200,
// }) => {
//   return (
//     <div>
//       <p className="font-normal text-sm text-[#0A0E00] mb-1.5">{label}</p>
//       <Select
//         placeholder={placeholder}
//         isLoading={loading}
//         isSearchable={isSearchable}
//         onChange={onChange}
//         options={options}
//         name={name}
//         value={value}
//         isMulti={isMulti}
//         isClearable={isClearable}
//         menuIsOpen={menuIsOpen}
//         defaultValue={defaultValue}
//         isDisabled={isDisabled}
//         closeMenuOnSelect={closeMenuOnSelect}
//         maxMenuHeight={height}
//         styles={{
//           control: (provided) => ({
//             ...provided,
//             width: "100%",
//             outline: "none",
//             borderColor: "#F1F1F4",
//             borderRadius: "8px",
//             minHeight: "42px",
//           }),
//           placeholder: (provided) => ({
//             ...provided,
//             color: "#C7C8D3",
//             fontSize: "16px",
//           }),
//         }}
//       />
//     </div>
//   );
// };

// export default ReactSelect;



// import React from "react";
// import ReactSelect from "./ReactSelect";

// const options = [
//   { label: "USA", value: "usa" },
//   { label: "Canada", value: "canada" },
// ];

// const ExampleComponent = () => {
//   return (
//     <div className="w-[300px]">
//       <ReactSelect
//         label="Select Country"
//         name="country"
//         options={options}
//         onChange={(selected) => console.log(selected)}
//         value={null}
//         placeholder={
//           <span className="italic text-gray-400">🌎 Choose a country</span>
//         }
//         isClearable
//         isSearchable
//         loading={false}
//         isDisabled={false}
//         isMulti={false}
//         closeMenuOnSelect
//       />
//     </div>
//   );
// };

// export default ExampleComponent;
