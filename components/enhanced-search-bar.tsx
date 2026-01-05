"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, TrendingUp, Package } from "lucide-react"
import { Input } from "@/components/ui/input"
import { products, searchSuggestions, type Product } from "@/lib/products-data"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function EnhancedSearchBar() {
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (search.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.brand.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()),
      )
      setFilteredProducts(filtered.slice(0, 5))
    } else {
      setFilteredProducts([])
    }
  }, [search])

  const handleSuggestionClick = (suggestion: string) => {
    setSearch(suggestion)
    setIsOpen(false)
    router.push(`/products?search=${encodeURIComponent(suggestion)}`)
  }

  const handleProductClick = (productId: string) => {
    setIsOpen(false)
    setSearch("")
    router.push(`/products/${productId}`)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) {
      setIsOpen(false)
      router.push(`/products?search=${encodeURIComponent(search)}`)
    }
  }

  const filteredSuggestions = searchSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div ref={searchRef} className="relative w-full">
      <form onSubmit={handleSearchSubmit} className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Search products, brands, or categories..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full h-12 pl-12 pr-4 text-base bg-background border-2 border-border hover:border-accent/50 focus:border-accent transition-all rounded-xl shadow-sm"
        />
      </form>

      {isOpen && (search.trim() || true) && (
        <div className="absolute top-full mt-2 w-full bg-background border-2 border-border rounded-xl shadow-xl overflow-hidden animate-fade-in z-50">
          <div className="max-h-[500px] overflow-y-auto">
            {/* Suggestions Section */}
            {filteredSuggestions.length > 0 && (
              <div className="p-3 border-b border-border">
                <div className="flex items-center gap-2 px-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Suggestions
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filteredSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1.5 bg-accent/10 hover:bg-accent/20 text-accent text-sm rounded-full transition-all hover:scale-105 font-medium"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Products Section */}
            {filteredProducts.length > 0 && (
              <div className="p-3">
                <div className="flex items-center gap-2 px-2 mb-3">
                  <Package className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Products</span>
                </div>
                <div className="space-y-1">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-accent/5 rounded-lg transition-all group"
                    >
                      <div className="relative w-14 h-14 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-sm group-hover:text-accent transition-colors line-clamp-1">
                          {product.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">{product.brand}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{product.category}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-accent">${product.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {search.trim() && filteredProducts.length === 0 && filteredSuggestions.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-sm text-muted-foreground">No results found for "{search}"</p>
                <p className="text-xs text-muted-foreground mt-1">Try searching for something else</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
