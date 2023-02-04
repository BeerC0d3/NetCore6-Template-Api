﻿// <auto-generated />
using System;
using BeerC0d3.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BeerC0d3.Infrastructure.Data.Migrations
{
    [DbContext(typeof(BeerCodeContext))]
    [Migration("20221101230944_MigcatalogoDetalle")]
    partial class MigcatalogoDetalle
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("Seguridad")
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("BeerC0d3.Core.Entities.Sistema.Catalogo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<bool>("Activo")
                        .HasColumnType("bit");

                    b.Property<string>("Clave")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.HasKey("Id");

                    b.ToTable("Catalogo", "Sistema");
                });

            modelBuilder.Entity("BeerC0d3.Core.Entities.Sistema.CatalogoDetalle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<bool>("Activo")
                        .HasColumnType("bit");

                    b.Property<int>("CatId")
                        .HasColumnType("int");

                    b.Property<string>("Clave")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("varchar(200)");

                    b.Property<DateTime>("FechAlta")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("CatId");

                    b.ToTable("CatalogoDetalle", "Sistema");
                });

            modelBuilder.Entity("BeerC0d3.Core.Entities.Sistema.CatalogoDetalle", b =>
                {
                    b.HasOne("BeerC0d3.Core.Entities.Sistema.Catalogo", "Catalogo")
                        .WithMany("CatalogoDetalles")
                        .HasForeignKey("CatId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Catalogo");
                });

            modelBuilder.Entity("BeerC0d3.Core.Entities.Sistema.Catalogo", b =>
                {
                    b.Navigation("CatalogoDetalles");
                });
#pragma warning restore 612, 618
        }
    }
}
