using EirViewer.API.Models;
using Microsoft.EntityFrameworkCore;

namespace EirViewer.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {
            
        }

        public  DbSet<Value> Values { get; set; }

        public  DbSet<User> Users { get; set; }

        public  DbSet<CgiInGate> InGates { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CgiInGate>()
                .HasKey(k => new { k.IgClientId, k.IgVendorId, k.IgDepotId, k.IgBillToCid, k.IgEir, k.IgUnitId });

            modelBuilder.Entity<Depot>()
                .HasKey(k => new { k.DepotClientNumber, k.DepotVendorNumber, k.DepotNumber, k.DepotCustomerNumber });

        }


    }
}