import { Customer } from './customer';
import { Depot } from './depot';

export interface Gate {
    igClientId: number;
    igVendorId: number;
    igVepotId: number;
    igBillToCid: number;

    igEir: string;
    igUnitId: string;
    igCheckDigit: string;

    igType: string;
    igDate: Date;

    igCondition: string;
    igOutDate?: Date;

    igEquipmentType: string;
    igEquipmentSize: string;
    igEquipmentGrade: string;

    igDismount: string;
    igMated: string;
    igMateId: string;
    igGenMateId: string;

    igManufacturer: string;
    igMfgDate: string;
    igMfgCountry: string;

    igPreTrip: string;
    igBillable: string;
    igCscInsp: string;
    igMove: string;
    igVin: string;
    igLicense: string;
    igLicenseState: string;
    igLicenseExpiration: string;
    igLicenseProblem: string;

    igFhwa?: Date;
    igFhwaStatus: string;
    igOnHold: string;
    igOnHoldReason: string;
    igLocation: string;
    igScac: string;

    igTruckingCo: string;
    igUsage: string;
    igUnitStatus: string;

    igDriverId: string;
    igDriverName: string;

    igTractorId: string;
    igEmptyLoaded: string;
    igSealNumber: string;
    igGrossWeight?: number;
    igBookingNumber: string;
    igLiftOff: string;
    igCharge: string;
    igInspection: string;
    igInspectedBy: string;
    igIssuedBy: string;
    igNotes: string;
    igAcceptanceNumber: string;
    igOnHireDate?: Date;
    ogOnHireLoc: string;

    igFrom: string;
    igLessee: string;

    igDpp: string;
    igCoverage: string;
    igCreateDate: Date;
    igRepairEstimateCreated: string;

    customer: Customer;
    depot: Depot;
}
