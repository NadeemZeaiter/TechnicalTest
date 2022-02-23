using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Concurrent;
using System.ComponentModel.DataAnnotations.Schema;

namespace RegistrationWebApplication.Models
{
    public class User
    {
        [Key]
        public int UserID { get;set;}

        [Column(TypeName = "nvarchar(100)")]
        public string UserName{get;set;}


        [Column(TypeName = "nvarchar(100)")]
        public string UserEmail     {get;set;}

        [Column(TypeName = "nvarchar(100)")]
        public string UserPassword {get;set;}

        [Column(TypeName = "nvarchar(16)")]
        public string UserType {get;set;}



        
    }
}
