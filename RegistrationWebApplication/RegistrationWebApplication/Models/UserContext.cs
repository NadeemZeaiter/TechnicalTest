using Microsoft.EntityFrameworkCore;

namespace RegistrationWebApplication.Models
{
    public class UserContext:DbContext
    {
        public UserContext(DbContextOptions<UserContext> options):base(options)

        { 
        }

        public DbSet<User> Users { get; set; }



        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDbContext<UserContext>(
                options => options.UseSqlServer("name=ConnectionStrings:DefaultConnection"));
        }
    }
}
