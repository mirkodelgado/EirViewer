using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EirViewer.API.Models
{
    [Table("CGI_InGate")]
    public class CgiInGate
    {
        public Int16 IgClientId { get; set; }

        [ForeignKey("IgClientId, IgVendorId, IgDepotId, IgBillToCid")]
        public virtual Depot Depot { get; set; }

        public Int16 IgVendorId { get; set; }
        public Int16 IgDepotId { get; set; }

        [ForeignKey("IgBillToCid")]
        public virtual Customer Customer { get; set; }

        public Int16 IgBillToCid { get; set; }

        public string IgEir { get; set; }
        public string IgUnitId { get; set; }
        public string IgCheckDigit { get; set; }
        public string IgType { get; set; }
        public DateTime IgDate { get; set; }
        public string IgCondition { get; set; }
        public DateTime? IgOutDate { get; set; }

        [ForeignKey("IgEquipmentType")]
        public virtual EquipmentType EquipmentType { get; set; }

        public Int16 IgEquipmentType { get; set; }
        public string IgEquipmentSize { get; set; }
        public string IgEquipmentGrade { get; set; }
        public string IgDismount { get; set; }
        public string IgMated { get; set; }
        public string IgMateId { get; set; }
        public string IgGenMateId { get; set; }
        public string IgManufacturer { get; set; }
        public string IgMfgDate { get; set; }
        public string IgMfgCountry { get; set; }
        public string IgPreTrip { get; set; }
        public string IgBillable { get; set; }
        public string IgCscinsp { get; set; }
        public string IgMove { get; set; }
        public string IgVin { get; set; }
        public string IgLicense { get; set; }
        public string IgLicenseState { get; set; }
        public string IgLicenseExpiration { get; set; }
        public string IgLicenseProblem { get; set; }
        public DateTime? IgFhwaDate { get; set; }
        public string IgFhwaStatus { get; set; }
        public string IgOnHold { get; set; }
        public string IgOnHoldReason { get; set; }
        public string IgLocation { get; set; }
        public string IgScac { get; set; }
        public string IgTruckingCo { get; set; }
        public string IgUsage { get; set; }
        public string IgUnitStatus { get; set; }
        public string IgDriverId { get; set; }
        public string IgDriverName { get; set; }
        public string IgTractorId { get; set; }
        public string IgEmptyLoaded { get; set; }
        public string IgSealNumber { get; set; }
        public int? IgGrossWeight { get; set; }
        public string IgBookingNumber { get; set; }
        public string IgLiftOff { get; set; }
        public string IgCharge { get; set; }
        public string IgInspection { get; set; }
        public string IgInspectedBy { get; set; }
        public string IgIssuedBy { get; set; }
        public string IgNotes { get; set; }
        public string IgAcceptanceNumber { get; set; }
        public DateTime? IgOnHireDate { get; set; }
        public string IgOnHireLoc { get; set; }
        public string IgFrom { get; set; }
        public string IgLessee { get; set; }
        public string IgDpp { get; set; }
        public string IgCoverage { get; set; }
        public DateTime IgCreateDate { get; set; }
        public string IgRepairEstimateCreated { get; set; }
    }



    [Table("CGI_BillToClient")]
    public class Customer           // Customer Object
    {
        [Key]
        [Column("btcBilltoClientID")]
        public Int16 CustomerNumber { get; set; }

        [Column("btcBilltoClientName")]
        public string CustomerName { get; set; }
    }

    [Table("CGI_Location")]
    public class Depot              // Depot Object 
    {
        [Column("dptClientID")]
        public Int16 DepotClientNumber { get; set; }

        [Column("dptVendorID")]
        public Int16 DepotVendorNumber { get; set; }

        [Column("dptDepotID")]
        public Int16 DepotNumber { get; set; }

        [Column("dptBillToClientID")]
        public Int16 DepotCustomerNumber { get; set; }

        [Column("dptSystemName")]
        public string DepotName { get; set; }
    }


    [Table("DMS_GateEquipmentNSIType")]
    public class EquipmentType           // Equipment Type Object
    {
        [Key]
        [Column("etnCode")]
        public Int16 EquipmentNumber { get; set; }

        [Column("etnDescription")]
        public string EquipmentName { get; set; }
    }


}
