import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="p-2 m-2 bg-white sm:mt-[100px] md:mt-[100px] drop-shadow-xl md:m-10 md:p-10 rounded-2xl border border-gray-100 h-[100vh]">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview">
          <div className="flex items-center justify-center gap-48">
            <div>
              <p className="mt-24 mb-4 text-2xl font-semibold">
                Inline Pallette
              </p>
              <ColorPickerComponent
                id="inline-pallete"
                mode="Palette"
                modeSwitcher={false}
                inline
                showButtons={false}
                change={change}
              />
            </div>
            <div>
              <p className="mt-24 mb-4 text-2xl font-semibold">Inline Picker</p>
              <ColorPickerComponent
                id="inline-pallete"
                mode="Picker"
                modeSwitcher={false}
                inline
                showButtons={false}
                change={change}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
