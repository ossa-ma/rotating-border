# rotating-border
Flexible wrapper that can add a rotating border effect to any component.
Works with any component (buttons, cards, images, divs, etc.) while preserving the original component's functionality and appearance.

The bulk of these files are used to initialize the demo web page that displays the rotating border examples.
To actually use the RotatingBorder component:
1. Simply copy the `rotating-border.tsx` file into your project's `/components/` folder.
2. Add the missing spin animation to your `globals.css` file:
```css
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

### Usage Examples

Here are some examples of how you can use this component with different shadcn/ui components:

#### With a Button

```typescriptreact
<RotatingBorder borderRadius="rounded-full" borderColor="#FF00FF">
  <Button className="w-full h-full rounded-full">
    Glowing Button
  </Button>
</RotatingBorder>
```

#### With a Card

```typescriptreact
<RotatingBorder borderWidth={2} borderColor="#FF00FF" rotationSpeed={4}>
  <Card>
    <CardHeader>
      <CardTitle>Account Settings</CardTitle>
    </CardHeader>
    <CardContent>
      {/* Card content */}
    </CardContent>
  </Card>
</RotatingBorder>
```

#### With an Image

```typescriptreact
<RotatingBorder 
  borderWidth={3}
  borderColor="#FFFF00"
  highlightPercentage={30}
  borderRadius="rounded-full"
>
  <Image 
    src="/your-image.jpg" 
    alt="Profile" 
    width={256} 
    height={256}
    className="rounded-full"
  />
</RotatingBorder>
```

### Customization
- `borderWidth`: Controls the thickness of the border
- `borderColor`: Sets the color of the glowing border
- `rotationSpeed`: Controls how fast the border rotates
- `highlightPercentage`: Determines how much of the border is visible vs. transparent
- `borderRadius`: Allows different shapes (rounded, square, etc.)
- `containerClassName`: Apply custom classes to the outer container
- `contentClassName`: Apply custom classes to the inner content wrapper

### Implementation Notes

1. The component uses a wrapper div with relative positioning to contain the rotating border effect.
2. The actual border effect is created with a span that has:
   - Absolute positioning
   - A conic gradient background
   - A continuous rotation animation
3. The children are wrapped in a div that sits on top of the rotating border.
4. The component is designed to be flexible with sizing - it will adapt to the size of its children, or you can explicitly set dimensions using the className prop.
