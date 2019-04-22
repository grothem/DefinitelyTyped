// Type definitions for AmCharts Export v1.4.76
// Project: https://github.com/amcharts/export
// Definitions by: Mark Grothe <https://github.com/grothem>

export default class ExportSettings {
    enabled: boolean;
    libs: object;
    menu: object;
    config: any;
    capture(config: any, callback: () => void): any;
    toJPG(options: any, callback: (data: any) => void): any;
    toPNG(options: any, callback: (data: any) => void): any;
    toSVG(options: any, callback: (data: any) => void): any;
    toPDF(options: any, callback: (data: any) => void): any;
    toJSON(options: any, callback: (data: any) => void): any;
    toCSV(options: any, callback: (data: any) => void): any;
    toXLSX(options: any, callback: (data: any) => void): any;
    toBlob(options: any, callback: (data: any) => void): any;
    toCanvas(options: any, callback: (data: any) => void): any;
    toArray(options: any, callback: (data: any) => void): any;
    toImage(options: any, callback: (data: any) => void): any;
}
