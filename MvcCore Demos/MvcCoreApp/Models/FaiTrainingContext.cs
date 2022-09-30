using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyMvcCoreWebApp.Models
{
    public partial class FaiTrainingContext : DbContext
    {
        public FaiTrainingContext()
        {
        }

        public FaiTrainingContext(DbContextOptions<FaiTrainingContext> options)
            : base(options)
        {
        }

       
        public virtual DbSet<EmployeeTable> EmployeeTable { get; set; }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=FaiTraining;Trusted_Connection=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeTable>(entity =>
            {
                entity.HasKey(e => e.EmpId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
