import com.reactnativecommunity.checkbox.ReactCheckBoxPackage;

@Override
protected List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    packages.add(new ReactCheckBoxPackage());
    return packages;
} 