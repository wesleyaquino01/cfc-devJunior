using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace backend.Models {
        public class Contexto : DbContext
        {
            private readonly IConfiguration _configuration;

            public Contexto(IConfiguration configuration)
            {
                _configuration = configuration;
            }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseInMemoryDatabase("db_catalogo");
            }

            public DbSet<Produto> Produto { get; set; }
        }
}
