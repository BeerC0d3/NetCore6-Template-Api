using AutoMapper;
using BeerC0d3.API.Dtos.Sistema;
using BeerC0d3.Core.Entities.Sistema;

namespace BeerC0d3.API.Profiles
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Menu, MenuDto>()
              .ReverseMap();
        }
    }
}
