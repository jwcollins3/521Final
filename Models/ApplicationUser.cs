﻿using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using _521Final.Models;


namespace _521Final.Models
{
    public class ApplicationUser : IdentityUser //control dot to add reference to MS.Ext.Ident.Stores.dll??
    {
        //prop from AspNetUsers in database you want

        public ICollection<UserBook> userBooks { get; set; }

        [Required]
        public string? Name { get; set;}
        public string Role { get; set; }

}
}
