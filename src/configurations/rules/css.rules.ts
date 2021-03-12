export const cssRules = {
    css: {
        test: /\.css$/i,
        // @ts-ignore
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    sass: {
        test: /\.s[ac]ss$/i,
        // @ts-ignore
        use: [MiniCssExtractPlugin.loader, "sass-loader"]
    },
    less: {
        
    }
}