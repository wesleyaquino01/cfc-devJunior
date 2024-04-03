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
                optionsBuilder.UseInMemoryDatabase("Db_catalogo");
            }

            public DbSet<Pessoa> Pessoas { get; set; }
            public DbSet<Produto> Produtos { get; set; }
        }
}
